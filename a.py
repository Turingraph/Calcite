import timeit
import pandas as pd
from collections import deque

def build_deque(n):
    return deque(range(n))

def iter_index(d):
    for i in range(len(d)):
        d[i]

def iter_it(d):
    for x in d:
        x

r = range(100, 10001, 100)

index_runs = [timeit.timeit(
    'iter_index(d)', 
    'from __main__ import build_deque, iter_index, iter_it; d = build_deque({})'.format(n), 
    number=1000) for n in r]
it_runs = [timeit.timeit(
    'iter_it(d)', 
    'from __main__ import build_deque, iter_index, iter_it; d = build_deque({})'.format(n), 
    number=1000) for n in r]

df = pd.DataFrame({'index':index_runs, 'iter':it_runs}, index=r)
df.plot()
