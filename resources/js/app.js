import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

InertiaProgress.init();

import "../css/app.css";

// Change how dynamic pages are loaded
const pages = import.meta.glob("./Pages/**/*.vue");

createInertiaApp({
    resolve: (name) => {
        const importPage = pages[`./Pages/${name}.vue`];
        if (!importPage) {
            throw new Error(
                `Unknown page ${name}. Is it located under Pages with a .vue extension?`
            );
        }
        return importPage().then((module) => module.default);
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mixin({ methods: { route } })
            .mount(el);
    },
});
