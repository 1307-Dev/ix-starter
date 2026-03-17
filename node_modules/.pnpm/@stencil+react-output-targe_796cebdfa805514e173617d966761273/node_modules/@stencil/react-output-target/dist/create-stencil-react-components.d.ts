import { ComponentCompilerMeta } from '@stencil/core/internal';
import { RenderToStringOptions } from './runtime/ssr.js';

export declare const createStencilReactComponents: ({ components, stencilPackageName, customElementsDir, hydrateModule, clientModule, serializeShadowRoot, transformTag, }: {
    components: ComponentCompilerMeta[];
    stencilPackageName: string;
    customElementsDir: string;
    hydrateModule?: string;
    clientModule?: string;
    serializeShadowRoot?: RenderToStringOptions["serializeShadowRoot"];
    transformTag?: boolean;
}) => string;
