import React from "react";
// https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/
// https://www.w3schools.com/typescript/typescript_keyof.php

// https://stackoverflow.com/questions/76755226/
// include-information-about-the-values-type-in-keyof-type

export default function KEY_OF<t extends object, k extends keyof t, j>({
  data,
  property,
  input
}:{
  data:Record<k, j>,
  property:k
  input:j
}) {
  const VALUE = data[property] as string;
  data[property] = input;

  return (
    <div>
      {(typeof property === "string") ? (
        <p>
          {property}: {VALUE}{" "}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
