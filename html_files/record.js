if(typeof EventType == "undefined"){
    var EventType = {};
    EventType.Click = 0;
}

if(typeof EventModule == "undefined"){
    var EventModule = {};
    EventModule.Product = 0;
    EventModule.Gongying = 1;
    EventModule.Quote = 2;
    EventModule.ZSShop = 3;
    EventModule.Shop = 4;
    EventModule.Zs = 5;
    EventModule.Spbz = 6;
    EventModule.Spfg = 7; 
    EventModule.News = 8;
}



if(typeof EventSource_ == "undefined"){
    var EventSource_ = {};
    EventSource_.Xunjia = 0;
    EventSource_.Call_ = 1;
    EventSource_.Buy = 2;
    EventSource_.Link = 3;
    EventSource_.Shoucang = 4;
    EventSource_.SQdl = 5;//申请代理
    EventSource_.Nayang = 6;//拿样 
}




function record(event_type,module,source,linkid,cid){
    $.post('/common/record.shtml',{'event_type':event_type,'module':module,'source_':source,'linkid':linkid,'cid':cid});
}

function record1(event_type,module,source,linkid,cid, url){
    $.post("/common/record.shtml",{'event_type':event_type,'module':module,'source_':source,'linkid':linkid,'cid':cid,'url':url});
}