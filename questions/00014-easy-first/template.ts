type First<T extends any[]> = T extends never[] ? never : T[0]
