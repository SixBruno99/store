export function CategoryFilterNormalizer(status: string) {
  switch (status) {
    case "electronics":
      return "Eletrônicos"
    case "jewelery":
      return "Jóias"
    case "men's clothing":
      return "Roupa Masculina"
    case "women's clothing":
      return "Roupa Feminina"
    default:
      return ""
  }
}