// jest-dom adds custom matchers for asserting on DOM nodes, e.g. toHaveTextContent.
import '@testing-library/jest-dom/vitest';

// jsdom has no IntersectionObserver; Motion's whileInView needs one. Treat everything as in view.
class IntersectionObserverStub {
  constructor(private readonly callback: IntersectionObserverCallback) {}
  observe(target: Element) {
    const entry = { isIntersecting: true, target, intersectionRatio: 1 } as IntersectionObserverEntry;
    this.callback([entry], this as unknown as IntersectionObserver);
  }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver = IntersectionObserverStub as unknown as typeof IntersectionObserver;
