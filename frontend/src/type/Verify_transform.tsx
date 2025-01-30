type VerifyTransform<T> = unknown extends
  (T extends { transformer: (input: string, arg: infer A) => string } ?
    T extends { arg: A } ? never : unknown : unknown
  ) ? never : unknown

  // https://stackoverflow.com/questions/51879601/how-do-you-define-an-array-of-generics-in-typescript