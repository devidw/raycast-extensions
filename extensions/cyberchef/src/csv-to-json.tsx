import { runCyberchefRecipe } from "./utils";

export default async function Command() {
  await runCyberchefRecipe({ recipe: "CSV_to_JSON(',','\\r\\n','Array of dictionaries')" });
}
