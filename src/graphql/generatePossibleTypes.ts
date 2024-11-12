import fs from "node:fs";

interface GeneratePossibleTypesArgs {
    input: string;
    output: string;
}

interface Supertype {
    name: string;
    possibleTypes: {
        name: string;
    }[];
}

export const generatePossibleTypes = async ({
    input,
    output,
}: GeneratePossibleTypesArgs) => {
    fetch(input, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            variables: {},
            query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
        }),
    })
        .then((result) => result.json())
        .then((result) => {
            const possibleTypes: Record<string, string[]> = {};

            result.data.__schema.types.forEach((supertype: Supertype) => {
                if (supertype.possibleTypes) {
                    possibleTypes[supertype.name] = supertype.possibleTypes.map(
                        (subtype) => subtype.name
                    );
                }
            });

            fs.writeFile(output, JSON.stringify(possibleTypes), (err) => {
                if (err) {
                    console.error("Error writing possibleTypes.json", err);
                } else {
                    console.log("Fragment types successfully extracted!");
                }
            });
        });
};
