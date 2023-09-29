function throttle<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): T {
  let isThrottled = false;
  let args: any[] | null = null;

  function wrapper(...funcArgs: any[]) {
    if (!isThrottled) {
      func(...funcArgs);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
        if (args) {
          wrapper(...args);
          args = null;
        }
      }, wait);
    } else {
      // If the function is already throttled, save the latest arguments
      args = funcArgs;
    }
  }

  return wrapper as T;
}
