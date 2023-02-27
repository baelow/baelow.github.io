# PYTHON 版本说明
## 简介
python版本分为Linux和Windows两种，主要是编译方式不同（已对核心代码做编译为二进制动态链）。

## Linux版本
### 使用说明
1. 安装python3.8
2. 安装nodejs (自行百度)
3. 安装python第三方库 `pip install -r requirements.txt` 
4. 在index.py中输入必要信息
5. 定时任务启动 `crond` 并部署任务。[crond帮助文件](https://linuxhandbook.com/start-stop-restart-cron/)   以下仅供参考
``` 
29 7 * * 2,3 cd /home/ubuntu/obj/badminton;python index*.py>>/home/ubuntu/obj/badminton/vpn_book.log 2>&1
# 分钟 小时 每周的周二周三 （执行index.py程序）运行日志在/home/ubuntu/obj/badminton/vpn_book.log中

# 详细步骤如下：
# 计划程序建立方法
# 启动crontab计划任务
# service crond start
# 建立计划任务
# crontab -e
# 编辑计划任务（根据下面的自行修改）
# 29 7 * * 2,3 cd /home/ubuntu/obj/badminton;python index*.py>>/home/ubuntu/obj/badminton/vpn_book.log 2>&1
# 查看当前计划任务列表
# crontab -l
``` 

## Windows版本
### 使用说明
1. 安装python3.9
2. 安装nodejs (自行百度)
3. 安装python第三方库 `pip install -r requirements.txt` 
4. 在index.py中输入必要信息
5. 使用windows定时任务。 [windows定时任务设定参考文档](https://blog.csdn.net/David_jiahuan/article/details/99960427)

## 附录-场地信息   
![输入图片说明](https://s3.bmp.ovh/imgs/2023/02/27/05a410b11c9f1d00.png)  


































