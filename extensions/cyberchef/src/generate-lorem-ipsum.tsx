import { runCyberchefRecipe } from "./utils";
export default async function Command() {
  await runCyberchefRecipe({ recipe: "Generate_Lorem_Ipsum(3,'Paragraphs')" });
}
