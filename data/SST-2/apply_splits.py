from pathlib import Path
import numpy as np

target_dir = Path('sentence_splits/')

sentences_path = 'original/datasetSentences.txt'
splits_path = 'original/datasetSplit.txt'
sentiment_path = 'original/sentiment_labels.txt'
phrase_ids_path = 'original/dictionary.txt'


def get_sentences_map(sentences_path):
    with open(sentences_path) as f:
        lines = f.readlines()[1:]
        sentences = [line.strip().split('\t') for line in lines]
        sentence_map = {int(row[0]): row[1] for row in sentences}
    # sentence idx-> sentence
    return sentence_map

def get_splits_map(splits_path):
    with open(splits_path) as f:
        lines = f.readlines()[1:]
        split_labels = [line.strip().split(',') for line in lines]
        label_map = {int(row[0]): int(row[1]) for row in split_labels}
    # sentence idx -> train/test/dev
    return label_map

def get_phrase_sentiments(sentiment_path):
    with open(sentiment_path) as f:
        lines = f.readlines()[1:]
        pairs = [line.strip().split('|') for line in lines]
        sentiment_map = {int(row[0]) : float(row[1]) for row in pairs}
        
    # phrase idx -> sentiment float
    return sentiment_map

def get_phrase_ids(phrase_ids_path):
    with open(phrase_ids_path) as f:
        lines = f.readlines()
        pairs = [line.strip().split('|') for line in lines]
        phrase_map = {row[0]: int(row[1]) for row in pairs}
    # phrase string -> phrase idx 
    return phrase_map


def find_phrases_in_sent(sentence, phrases_map):
    idx = 0
    end = len(sentence)
    phrases_ids = []
    while idx <= end and idx < len(sentence):
        substr = sentence[idx:end]
        if substr in phrases_map:
            phrases_ids.append(phrases_map[substr])
            idx = end + 1
            end = len(sentence)
        else:
            end -= 1
    #if end == len(sentence):
    return phrases_ids
    #else:
    #    return []



def phrase_sentence_match(sentences_map, phrases_map):
    sentence_phrases = {}
    for sentence_idx, sentence in sentences_map.items():
        phrases = find_phrases_in_sent(sentence, phrases_map)
        sentence_phrases[sentence_idx] = phrases
    return sentence_phrases


def sentence_sentiments(sentences_map, phrases_map, sentiment_map):
    sentence_phrases_map = phrase_sentence_match(sentences_map, phrases_map)
    sentence_sentiments = {}
    for sentence_idx, phrase_ids in sentence_phrases_map.items():
        if len(phrase_ids) > 0:
            sentiments = np.average([sentiment_map[phrase_id] for phrase_id in phrase_ids])
            #sentiments = len([sentiment_map[phrase_id] for phrase_id in phrase_ids])
        else:
            print(sentence_idx)
        sentence_sentiments[sentence_idx] = sentiments
    return sentence_phrases_map, sentence_sentiments


# 1 = train
# 2 = test
# 3 = dev

sentence_map = get_sentences_map(sentences_path)
splits_map = get_splits_map(splits_path)
sentiment_map = get_phrase_sentiments(sentiment_path)
phrase_ids_map = get_phrase_ids(phrase_ids_path)
#print(find_phrases_in_sent('The Rock Your Belt', phrase_ids_map))

#print(phrase_ids_map)
sentence_phrases_map, sentence_sentiments = sentence_sentiments(sentence_map, phrase_ids_map, sentiment_map)
#print(sentence_sentiments)
#from collections import Counter
#partitions = [0, 0, 0, 0, 0]
#for std in sentence_sentiments.values():
#    if std <= .2:
#        partitions[0] += 1
#    elif std <= .4:
#        partitions[1] += 1
#    elif std <= .6:
#        partitions[2] += 1
#    elif std <= .8:
#        partitions[3] += 1
#    else:
#        partitions[4] += 1
#print(partitions)

with open(target_dir / 'train.tsv', 'w') as train:
    with open(target_dir / 'dev.tsv', 'w') as dev:
        for idx, label in splits_map.items():
            if label == 3:
                dev.write(f'{sentence_map[idx]}\t{sentence_sentiments[idx]}\n')
            elif label == 1:
                train.write(f'{sentence_map[idx]}\t{sentence_sentiments[idx]}\n')

