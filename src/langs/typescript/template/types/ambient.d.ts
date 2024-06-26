// additional type declarations for GJS

// additional GJS log utils
declare function print(...args: any[]): void;
declare function log(...args: any[]): void;

// GJS pkg global
declare const pkg: {
  version: string;
  name: string;
};

// old GJS global imports
// used like: imports.format.printf("...");
declare module imports {
  // format import
  const format: {
    format(this: String, ...args: any[]): string;
    printf(fmt: string, ...args: any[]): string;
    vprintf(fmt: string, args: any[]): string;
  };
}

// gettext import
declare module "gettext" {
  export function gettext(id: string): string;
  export function ngettext(
    singular: string,
    plural: string,
    n: number,
  ): string;
}

// global workbench object
// TODO: use correct typings
declare const workbench: any;
