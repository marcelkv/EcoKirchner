export function fitStringIntoElement(
  msg: string,
  element: HTMLDivElement,
  padding = 0
): string {
  const numCharacters = calculateCharactersThatFitIn(element, padding);

  if (numCharacters >= msg.length) {
    return msg;
  }

  return msg.substring(0, numCharacters) + "...";
}
function calculateCharactersThatFitIn(
  element: HTMLDivElement,
  padding = 0
): number {
  if (!element) {
    return 0;
  }

  const containerWidth = element.offsetWidth - padding;
  if (containerWidth <= 0) {
    return 0;
  }

  const font = window.getComputedStyle(element).getPropertyValue("font-size");
  const fontSize = parseFloat(font);
  const averageCharacterWidth = fontSize * 0.6;
  return Math.floor(containerWidth / averageCharacterWidth);
}
