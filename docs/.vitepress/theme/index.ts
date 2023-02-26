/**
 * index
 * @author mao
 * @create_date 2022/12/19
 * @modify_date 2022/12/19
 * @modify_content
 */

import Theme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style/var.less";
import "element-plus/theme-chalk/dark/css-vars.css";

let search = null;
export default {
  ...Theme,
  enhanceApp(ctx: any) {
    Theme.enhanceApp(ctx);
    ctx.app.use(ElementPlus);

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          document.querySelector(".modal-back")?.click();
          // search.cleanSearch()
          // if (!search) {
          //   if (ctx.app._instance.subTree?.component?.subTree?.children) {
          //     ctx.app._instance.subTree.component.subTree.children.forEach(
          //       (t) => {
          //         if (t.type.__name === "VPNav") {
          //           t.component.subTree.children.forEach((t1) => {
          //             if (t1.type.__name === "VPNavBar") {
          //               t1.component.subTree.dynamicChildren.forEach((t2) => {
          //                 if (t2.type.__name === "Search") {
          //                   // console.log(t2.component.devtoolsRawSetupState.open)
          //                   // t2.component.devtoolsRawSetupState.open.value = true
          //                   search = t2.component.devtoolsRawSetupState;
          //                   // t2.component.openSearch()
          //                 }
          //               });
          //             }
          //           });
          //         }
          //       }
          //     );
          //   }
          // }
          // search && search.cleanSearch();
        }
      });
    }
  },
};
