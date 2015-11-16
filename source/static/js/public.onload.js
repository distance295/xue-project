/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 22:11:01
 * @version $Id$
 */

/**
    var PAGE_CONFIG = {
        ID: 'Index',
        MODULE:'UserHome',
        TITLE: '学习中心',
    };
 **/
var PAGE_CONFIG = PAGE_CONFIG || {};

$(function(){
    document.title = PAGE_CONFIG.TITLE;
    dropdown.init();
    try{
        sidebar.setActive(PAGE_CONFIG.ID);
    }catch(e){}
    try{
        fresh.init({
            commentUrl: '/data/Dynamic/coment.html'
        });
    }catch(e){}
    try{
        sideNav.setActive(PAGE_CONFIG.ID);
    }catch(e){}
    try{
        subNav.setActive(PAGE_CONFIG.SUBJECT);
    }catch(e){}
});
