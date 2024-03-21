export function CategoryFilterNormalizer(category: string) {
  switch (category) {
    case "Todos":
      return category
    case "electronics":
      return "Eletrônicos"
    case "jewelery":
      return "Jóias"
    case "men's clothing":
      return "Roupa Masculina"
    case "women's clothing":
      return "Roupa Feminina"
    default:
      return category
  }
}