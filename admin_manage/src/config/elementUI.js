/**
 * elementUI的相关配置
 */
import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Container,
    Header,
    Aside,
    Main,
    Col,Row,
    Menu,
    MenuItemGroup,
    MenuItem,
    Submenu,
    Popconfirm,Popover,
    Table,
    TableColumn,
    Loading
  } from 'element-ui'
  
  Vue.use(Button).use(Form).use(FormItem).use(Input).use(Container).use(Header).use(Aside)
  .use(Main).use(Col).use(Row).use(Menu).use(MenuItemGroup).use(Submenu).use(Popconfirm)
  .use(Popover).use(MenuItem).use(Table).use(TableColumn).use(Loading)
  Vue.prototype.$message = Message