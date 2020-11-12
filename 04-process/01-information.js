#!/usr/bin/env node

const log = console.log;

log(`architecture: ${process.arch}`);        //CPU架构
log(`platform:     ${process.platform}\n`);  // 操作系统

log(`process id:   ${process.pid}`);         //当前进程的id
log(`exePath:      ${process.execPath}\n`);  //node运行的执行路径

log(`node version: ${process.version}`);     //nodejs的版本信息
log(`user id:      ${process.getuid()}`);    //当前登录Linux的id信息
log(`group id:     ${process.getgid()}`);    //group的信息
log(`cwd:          ${process.cwd()}\n`);     //当前路径

//系统
log(`rss:       ${process.memoryUsage().rss}`);         //
log(`heapTotal: ${process.memoryUsage().heapTotal}`);   //
log(`heapUsed:  ${process.memoryUsage().heapUsed}`);    //
log(`external:  ${process.memoryUsage().external}\n`);  //

log('env:');                                            //
log(process.env);                                       //
log(`host name: ${process.env.HOSTNAME}`);              //
