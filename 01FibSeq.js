function fibSeq(n) {
  let seq = [];
  if (n >= 1) seq.push(0);
  if (n >= 2) seq.push(1);
  let i = 2;
  while (i < n) {
    seq.push(seq[i - 2] + seq[i - 1]);
    i += 1;
  }
  return seq;
}

const resFib = fibSeq(7);

resFib;
