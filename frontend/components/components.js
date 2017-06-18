import angular from 'angular';
import Home from './home/home';
import Navbar from './navbar/navbar';
import MailBox from './mail-box/mail';
import MailBoxList from './mail-box-list/list';
import MailBoxForm from './mail-box-form/form';
import Login from './login/login';
import FullLetter from './letter-full/letter';

let componentModule = angular.module('app.components', [
    Home,
    Navbar,
    MailBox,
    MailBoxList,
    MailBoxForm,
    Login,
    FullLetter
]).name;

export default componentModule;