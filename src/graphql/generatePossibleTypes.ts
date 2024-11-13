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

export const generatePossibleTypes = async ({ input, output }: GeneratePossibleTypesArgs) => {
    const q = await fetch(input, {
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
    });

    const json = await q.json();

    const possibleTypes: Record<string, string[]> = {};

    json.data.__schema.types.forEach((supertype: Supertype) => {
        if (supertype.possibleTypes) {
            possibleTypes[supertype.name] = supertype.possibleTypes.map((subtype) => subtype.name);
        }
    });

    fs.writeFile(output, JSON.stringify(possibleTypes), (err) => {
        if (err) {
            console.error("Error writing possibleTypes.json", err);
        } else {
            console.log("\x1b[92m%s\x1b[0m", "✓ Fragment types output was generated successfully");
        }
    });
};
