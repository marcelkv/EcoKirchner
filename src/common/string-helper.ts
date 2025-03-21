export function fitStringIntoElement(
  msg: string,
  element: HTMLDivElement,
  padding = 0,
): string {
  const numCharacters = calculateCharactersThatFitIn(element, padding);

  if (numCharacters >= msg.length) {
    return msg;
  }

  return msg.substring(0, numCharacters) + "...";
}
function calculateCharactersThatFitIn(
  element: HTMLDivElement,
  padding = 0,
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

export function getDateFormatted_1(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("de-DE", options).format(date);
}

export function getDateFormatted_2(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${day}.${month}.${year}`;
}

export function getOldDate(): Date {
  return new Date("2000-01-01T00:00:00Z");
}
