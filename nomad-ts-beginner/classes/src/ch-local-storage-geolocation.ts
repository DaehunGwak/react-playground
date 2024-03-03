/**
 * LocalStorage API
 * - Use abstract classes and generics
 */
class LocalStorage<T> implements StorageBehavior<T> {
  private storage: MemoryStorage<T> = {};

  setItem(key: string, value: T) {
    this.storage[key] = value;
  }

  getItem(key: string): T {
    return this.storage[key];
  }

  clearItem(key: string) {
    delete this.storage[key];
  }

  clear() {
    // 메모리 garbage 에 남기는 것 보단 다 확실히 지우는게 낫지 않을까?
    for (const key in this.storage) {
      delete this.storage[key];
    }
  }
}

abstract class StorageBehavior<T> {
  abstract setItem(key: string, value: T): void

  abstract getItem(key: string): T

  abstract clearItem(key: string): void

  abstract clear(): void
}

interface MemoryStorage<T> {
  [key: string]: T
}

const testLocalStorage = new LocalStorage<number>();
testLocalStorage.setItem("test1", 1);
testLocalStorage.setItem("test2", 2);
console.log(testLocalStorage.getItem("test1"));
testLocalStorage.clearItem("test1");
testLocalStorage.clear();
console.log(testLocalStorage.getItem("test2"));


/**
 * Geolocation API
 * - Use overloading
 * geolocation chromium code: https://src.chromium.org/viewvc/chrome/trunk/src/chrome/browser/geolocation/
 */
class MyGeolocation {
  static readonly DEFAULT_SUCCESS_LOG_CALLBACK: PositionCallback =
    (position: GeolocationPosition) => console.log(position.coords.latitude, position.coords.longitude);
  static readonly DEFAULT_ERROR_LOG_CALLBACK: PositionErrorCallback =
    (positionError: GeolocationPositionError) => console.error("error", positionError.code, positionError.message);
  static readonly DEFAULT_POSITION_OPTIONS: PositionOptions = {
    enableHighAccuracy: false,
    maximumAge: 1_000,
    timeout: 10_000,
  };

  private readonly geolocation = navigator.geolocation;

  getCurrentPosition(
    successFn: PositionCallback,
    errorFn?: PositionErrorCallback,
    optionsObj?: PositionOptions,
  ) {
    this.geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
  }

  watchPosition(
    successFn: PositionCallback,
    errorFn?: PositionErrorCallback,
    optionsObj?: PositionOptions,
  ): number {
    return this.geolocation.watchPosition(successFn, errorFn, optionsObj);
  }

  clearWatch(id: number) {
    this.geolocation.clearWatch(id);
  }
}

const geo = new MyGeolocation();

geo.getCurrentPosition(MyGeolocation.DEFAULT_SUCCESS_LOG_CALLBACK);
geo.getCurrentPosition(
  MyGeolocation.DEFAULT_SUCCESS_LOG_CALLBACK,
  MyGeolocation.DEFAULT_ERROR_LOG_CALLBACK
);
geo.getCurrentPosition(
  MyGeolocation.DEFAULT_SUCCESS_LOG_CALLBACK,
  MyGeolocation.DEFAULT_ERROR_LOG_CALLBACK,
  MyGeolocation.DEFAULT_POSITION_OPTIONS,
);

const geoWatchedId1 = geo.watchPosition(MyGeolocation.DEFAULT_SUCCESS_LOG_CALLBACK);
const geoWatchedId2 = geo.watchPosition(
  MyGeolocation.DEFAULT_SUCCESS_LOG_CALLBACK,
  MyGeolocation.DEFAULT_ERROR_LOG_CALLBACK,
);
const geoWatchedId3 = geo.watchPosition(
  MyGeolocation.DEFAULT_SUCCESS_LOG_CALLBACK,
  MyGeolocation.DEFAULT_ERROR_LOG_CALLBACK,
  MyGeolocation.DEFAULT_POSITION_OPTIONS
);

setTimeout(() => {
  geo.clearWatch(geoWatchedId1);
  geo.clearWatch(geoWatchedId2);
  geo.clearWatch(geoWatchedId3);
  console.log("clear done");
}, 20_000);
