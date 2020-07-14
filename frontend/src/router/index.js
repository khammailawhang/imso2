import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../i18n";
Vue.use(VueRouter);

const routes = [{
        path: "/:lang",
        redirect: `/${i18n.locale}`,
    },
    {
        path: "/:lang",
        component: {
            render(c) {
                return c("router-view");
            },
        },
        children: [{
                path: "Started",
                name: "/Started",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Started.vue"),
            },
            {
                path: "Home",
                name: "/Home",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Home.vue"),
            },
            {
                path: "Login",
                name: "/Login",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Login.vue"),
            },
            {
                path: "Login1",
                name: "/Login1",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Login1.vue"),
            },
            {
                path: "Register",
                name: "/Register",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Register.vue"),
            },

            {
                path: "RegisterEdit",
                name: "/RegisterEdit",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/RegisterEdit.vue"),
            },
            {
                path: "RegisterCreate",
                name: "/RegisterCreate",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/RegisterCreate.vue"
                    ),
            },
            {
                path: "RegisterDetail",
                name: "/RegisterDetail",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/RegisterDetail.vue"
                    ),
            },
            {
                path: "Inspection",
                name: "/Inspection",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Inspection.vue"),
            },

            {
                path: "InspectionEdit",
                name: "/InspectionEdit",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/InspectionEdit.vue"
                    ),
            },
            {
                path: "InspectionList",
                name: "/InspectionList",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/InspectionList.vue"
                    ),
            },
            {
                path: "InspectionPrint",
                name: "/InspectionPrint",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/InspectionPrint.vue"
                    ),
            },

            {
                path: "Inspectionqr",
                name: "/Inspectionqr",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/Inspectionqr.vue"
                    ),
            },
            {
                path: "Inspectionqr2",
                name: "/Inspectionqr2",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/Inspectionqr2.vue"
                    ),
            },
            {
                path: "InspectionDetail",
                name: "/InspectionDetail",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/InspectionDetail.vue"
                    ),
            },
            {
                path: "InspectionCreateNew",
                name: "/InspectionCreateNew",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/InspectionCreateNew.vue"
                    ),
            },
            {
                path: "InspectionStart",
                name: "/InspectionStart",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/InspectionStart.vue"
                    ),
            },
            // {
            //     path: "Inspection/Print_table",
            //     name: "/Inspection/Print_table",
            //     component: () =>
            //         import (
            //             /* webpackChunkName: "contact" */
            //             "../views/Inspection/Print.vue"
            //         )
            // },

            // {
            //     path: "InspectionReportDownload",
            //     name: "/InspectionReportDownload",
            //     component: () =>
            //         import (
            //             /* webpackChunkName: "contact" */
            //             "../views/InspectionReportDownload.vue"
            //         ),
            // },

            {
                path: "InspectionPrint2",
                name: "/InspectionPrint2",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/InspectionPrint2.vue"
                    ),
            },
            {
                path: "InspectionExpired",
                name: "/InspectionExpired",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/InspectionExpired.vue"
                    ),
            },
            {
                path: "InspectionActive",
                name: "/InspectionActive",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/InspectionActive.vue"
                    ),
            },
            {
                path: "Chart",
                name: "/Chart",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Chart.vue"),
            },
            {
                path: "Chart-line",
                name: "/Chart-line",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Chart-line.vue"),
            },
            {
                path: "Barchart",
                name: "/Barchart",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Barchart.vue"),
            },
            {
                path: "Color",
                name: "/Color",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Color.vue"),
            },
            {
                path: "ColorCreate",
                name: "/ColorCreate",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/ColorCreate.vue"),
            },
            {
                path: "ColorEdit",
                name: "/ColorEdit",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/ColorEdit.vue"),
            },
            {
                path: "Model",
                name: "/Model",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Model.vue"),
            },
            {
                path: "ModelCreate",
                name: "/ModelCreate",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/ModelCreate.vue"),
            },
            {
                path: "ModelEdit",
                name: "/ModelEdit",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/ModelEdit.vue"),
            },
            {
                path: "ModelPopular",
                name: "/ModelPopular",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/ModelPopular.vue"),
            },
            {
                path: "FeePerYear",
                name: "/FeePerYear",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/FeePerYear.vue"),
            },
            {
                path: "TypePopular",
                name: "/TypePopular",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/TypePopular.vue"),
            },
            {
                path: "Type",
                name: "/Type",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Type.vue"),
            },
            {
                path: "TypeCreate",
                name: "/TypeCreate",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/TypeCreate.vue"),
            },
            {
                path: "TypeEdit",
                name: "/TypeEdit",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/TypeEdit.vue"),
            },
            {
                path: "Village",
                name: "/Village",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Village.vue"),
            },
            {
                path: "VillageCreate",
                name: "/VillageCreate",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/VillageCreate.vue"
                    ),
            },
            {
                path: "VillageEdit",
                name: "/VillageEdit",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/VillageEdit.vue"),
            },
            {
                path: "District",
                name: "/District",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/District.vue"),
            },
            {
                path: "DistrictCreate",
                name: "/DistrictCreate",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/DistrictCreate.vue"
                    ),
            },
            {
                path: "DistrictEdit",
                name: "/DistrictEdit",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/DistrictEdit.vue"),
            },
            {
                path: "Province",
                name: "/Province",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Province.vue"),
            },
            {
                path: "ProvinceCreate",
                name: "/ProvinceCreate",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/ProvinceCreate.vue"
                    ),
            },
            {
                path: "ProvinceEdit",
                name: "/ProvinceEdit",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/ProvinceEdit.vue"),
            },
            {
                path: "Organization",
                name: "/Organization",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Organization.vue"),
            },
            {
                path: "Organization/Create",
                name: "/Organization/Create",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/Organization/Create.vue"
                    ),
            },
            {
                path: "Organization/Edit",
                name: "/Organization/Edit",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/Organization/Edit.vue"
                    ),
            },
            {
                path: "Table",
                name: "/Table",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Table.vue"),
            },
            {
                path: "FeeSetting/Create",
                name: "/FeeSetting/Create",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/FeeSetting/Create.vue"
                    ),
            },
            {
                path: "FeeSetting/Edit",
                name: "/FeeSetting/Edit",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/FeeSetting/Edit.vue"
                    ),
            },
            {
                path: "FeeSetting",
                name: "/FeeSetting",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/FeeSetting.vue"),
            },
            {
                path: "StandardSetting/Create",
                name: "/StandardSetting/Create",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/StandardSetting/Create.vue"
                    ),
            },
            {
                path: "StandardSetting/Edit",
                name: "/StandardSetting/Edit",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/StandardSetting/Edit.vue"
                    ),
            },
            {
                path: "StandardSetting",
                name: "/StandardSetting",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/StandardSetting.vue"
                    ),
            },
            {
                path: "UserCreate",
                name: "/UserCreate",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/UserCreate.vue"),
            },
            {
                path: "UserEdit",
                name: "/UserEdit",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/UserEdit.vue"),
            },
            {
                path: "User/Created",
                name: "/User/Created",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/User/Created.vue"),
            },
            {
                path: "User",
                name: "/User",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/User.vue"),
            },
            {
                path: "FeeCreate",
                name: "/FeeCreate",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/FeeCreate.vue"),
            },
            {
                path: "Fee/Fee-List",
                name: "/Fee/Fee-List",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Fee/Fee-List.vue"),
            },
            {
                path: "FeeEdit",
                name: "/FeeEdit",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/FeeEdit.vue"),
            },
            {
                path: "FeeList",
                name: "/FeeList",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/FeeList.vue"),
            },
            {
                path: "FeePrint",
                name: "/FeePrint",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/FeePrint.vue"),
            },
            {
                path: "Feeqr",
                name: "/Feeqr",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Feeqr.vue"),
            },
            {
                path: "Fee/Detail",
                name: "/Fee/Detail",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Fee/Detail.vue"),
            },
            {
                path: "Fee/PaySuccess",
                name: "/Fee/PaySuccess",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/Fee/PaySuccess.vue"
                    ),
            },
            {
                path: "Fee",
                name: "/Fee",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Fee.vue"),
            },
            {
                path: "Table2",
                name: "/Table2",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Table2.vue"),
            },
            {
                path: "Table4",
                name: "/Table4",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Table4.vue"),
            },
            {
                path: "Table3",
                name: "/Table3",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Table3.vue"),
            },
            {
                path: "Table5",
                name: "/Table5",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Table5.vue"),
            },
            {
                path: "Table6",
                name: "/Table6",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Table6.vue"),
            },
            {
                path: "Table7",
                name: "/Table7",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Table7.vue"),
            },
            {
                path: "Table8",
                name: "/Table8",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Table8.vue"),
            },
            {
                path: "Table10",
                name: "/Table10",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Table10.vue"),
            },
            {
                path: "Table11",
                name: "/Table11",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Table11.vue"),
            },
            {
                path: "Table9",
                name: "/Table9",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Table9.vue"),
            },
            {
                path: "FeeSetting1",
                name: "/FeeSetting1",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/FeeSetting1.vue"),
            },
            {
                path: "Type_Register",
                name: "/Type_Register",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/Type_Register.vue"
                    ),
            },
            {
                path: "Type_RegisterCreate",
                name: "/Type_RegisterCreate",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/Type_RegisterCreate.vue"
                    ),
            },
            {
                path: "Type_RegisterEdit",
                name: "/Type_RegisterEdit",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/Type_RegisterEdit.vue"
                    ),
            },
            {
                path: "Card",
                name: "/Card",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Card.vue"),
            },
            {
                path: "Fix_Table",
                name: "/Fix_Table",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Fix_Table.vue"),
            },
            {
                path: "Fix_Table1",
                name: "/Fix_Table1",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Fix_Table1.vue"),
            },
            {
                path: "Fix_Table2",
                name: "/Fix_Table2",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Fix_Table2.vue"),
            },
            {
                path: "Branch",
                name: "/Branch",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Branch.vue"),
            },
            {
                path: "BranchCreate",
                name: "/BranchCreate",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/BranchCreate.vue"),
            },
            {
                path: "BranchEdit",
                name: "/BranchEdit",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/BranchEdit.vue"),
            },

            {
                path: "Tab",
                name: "/Tab",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Tab.vue"),
            },
            {
                path: "Button",
                name: "/Button",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Button.vue"),
            },
            {
                path: "Report",
                name: "/Report",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Report.vue"),
            },
            {
                path: "Report1",
                name: "/Report1",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Report1.vue"),
            },
            {
                path: "qrcode",
                name: "/qrcode",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/qrcode.vue"),
            },
            {
                path: "print",
                name: "/print",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/print.vue"),
            },

            {
                path: "print2",
                name: "/print2",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/print2.vue"),
            },
            {
                path: "Upload",
                name: "/Upload",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Upload.vue"),
            },
            {
                path: "Upload1",
                name: "/Upload1",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Upload1.vue"),
            },
            {
                path: "Upload2",
                name: "/Upload2",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Upload2.vue"),
            },
            {
                path: "UploadShow",
                name: "/UploadShow",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/UploadShow.vue"),
            },
            {
                path: "Level/Create",
                name: "/Level/Create",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Level/Create.vue"),
            },
            {
                path: "Level/Edit",
                name: "/Level/Edit",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Level/Edit.vue"),
            },
            {
                path: "Level",
                name: "/Level",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Level.vue"),
            },
            {
                path: "Print3",
                name: "/Print3",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Print3.vue"),
            },
            {
                path: "ChangePassword",
                name: "/ChangePassword",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/ChangePassword.vue"
                    ),
            },

            // Router All Report
            {
                path: "InspectionReport",
                name: "/InspectionReport",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/InspectionReport.vue"
                    ),
            },
            {
                path: "FeeReports",
                name: "/FeeReports",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/FeeReports.vue"),
            },
            {
                path: "Management",
                name: "/Management",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Management.vue"),
            },
            {
                path: "AdminManagement",
                name: "/AdminManagement",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/AdminManagement.vue"
                    ),
            },
            {
                path: "AdminPage",
                name: "/AdminPage",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/AdminPage.vue"),
            },
            {
                path: "AdminPerDay",
                name: "/AdminPerDay",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/AdminPerDay.vue"),
            },
            {
                path: "AdminPerMonth",
                name: "/FeePerMonth",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/AdminPerMonth.vue"
                    ),
            },
            {
                path: "AdminPerYear",
                name: "/adminPerYear",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/AdminPerYear.vue"),
            },
            {
                path: "AdminInspection",
                name: "/AdminInspection",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/AdminInspection.vue"
                    ),
            },
            {
                path: "AdminAllInspection",
                name: "/AdminAllInspection",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/AdminAllInspection.vue"
                    ),
            },
            {
                path: "AdminActiveInspection",
                name: "/AdminActiveInpection",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/AdminActiveInspection.vue"
                    ),
            },
            {
                path: "AdminModelPopular",
                name: "/AdminModelPopular",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/AdminModelPopular.vue"
                    ),
            },
            {
                path: "AdminTypePopular",
                name: "/AdminTypePopular",
                component: () =>
                    import (
                        /* webpackChunkName: "contact" */
                        "../views/AdminTypePopular.vue"
                    ),
            },
            {
                path: "SimpleBar",
                name: "/SimpleBar",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/SimpleBar.vue"),
            },
            {
                path: "Simple",
                name: "/Simple",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Simple.vue"),
            },
            {
                path: "Filter",
                name: "/Filter",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Filter.vue"),
            },
            {
                path: "Filter1",
                name: "/Filter1",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Filter1.vue"),
            },
            {
                path: "Pdf",
                name: "/Pdf",
                component: () =>
                    import ( /* webpackChunkName: "contact" */ "../views/Pdf.vue"),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;