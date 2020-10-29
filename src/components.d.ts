/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHelp {
    }
    interface AppHome {
    }
    interface AppRoot {
    }
    interface AppSettingsPage {
    }
    interface ConfirmRefreshModal {
    }
}
declare global {
    interface HTMLAppHelpElement extends Components.AppHelp, HTMLStencilElement {
    }
    var HTMLAppHelpElement: {
        prototype: HTMLAppHelpElement;
        new (): HTMLAppHelpElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppSettingsPageElement extends Components.AppSettingsPage, HTMLStencilElement {
    }
    var HTMLAppSettingsPageElement: {
        prototype: HTMLAppSettingsPageElement;
        new (): HTMLAppSettingsPageElement;
    };
    interface HTMLConfirmRefreshModalElement extends Components.ConfirmRefreshModal, HTMLStencilElement {
    }
    var HTMLConfirmRefreshModalElement: {
        prototype: HTMLConfirmRefreshModalElement;
        new (): HTMLConfirmRefreshModalElement;
    };
    interface HTMLElementTagNameMap {
        "app-help": HTMLAppHelpElement;
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
        "app-settings-page": HTMLAppSettingsPageElement;
        "confirm-refresh-modal": HTMLConfirmRefreshModalElement;
    }
}
declare namespace LocalJSX {
    interface AppHelp {
    }
    interface AppHome {
    }
    interface AppRoot {
    }
    interface AppSettingsPage {
    }
    interface ConfirmRefreshModal {
    }
    interface IntrinsicElements {
        "app-help": AppHelp;
        "app-home": AppHome;
        "app-root": AppRoot;
        "app-settings-page": AppSettingsPage;
        "confirm-refresh-modal": ConfirmRefreshModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-help": LocalJSX.AppHelp & JSXBase.HTMLAttributes<HTMLAppHelpElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-settings-page": LocalJSX.AppSettingsPage & JSXBase.HTMLAttributes<HTMLAppSettingsPageElement>;
            "confirm-refresh-modal": LocalJSX.ConfirmRefreshModal & JSXBase.HTMLAttributes<HTMLConfirmRefreshModalElement>;
        }
    }
}