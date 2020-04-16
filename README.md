# text

研究下这个怎么玩，写个拖拽好了~~~
 
~ 这个拖拽也要有点预览啊 [点击这里](https://summernian.github.io/text/demo.html)


## git的一些基本命令

## 设置

* git config --global user.name *设置用户名 "summernian"*
* git config --global user.email *设置邮箱 "315652758@qq.com"*
* git config --list *查看配置*


## git的三个区

* 工作区
* 暂存区
  - 作为过渡层
  - 避免误操作
  - 保护工作区和版本区
  - 分支处理
* 版本区（库）

## git命令

* git status
* git add *<file文件名>*
* git commit *提交*
* git log *查看提交历史*

## 对比
* git diff *工作区和暂存区的对比*
* git diff --cached *暂存区和版本库之间的对比(--staged)*
* git diff master *工作区和版本库之间的对比*

## 撤销
* git reset HEAD <file文件名> *从暂存区撤销到工作区*
* git checkout -- <file文件名> *从工作区撤销数据操作*
* git commit --amend *撤销上次操作重新提交*

## 删除
* git rm <file文件名> *删除暂存区的文件*
* git rm -f <file文件名> *工作区、暂存区都删掉*
* git rm --cached <file文件名> *暂存区删除,工作区保留*

## 恢复
* git checkout commit_id <file文件名> *恢复单个文件*
* git reset --hard commit_id *恢复版本*
  - HEAD^ *回到上个版本*
  - HEAD~number *回到上几个版本*
* git reflog *查看操作行为*

## 同步到远程仓库
* git remote
  - -v
  - origin *获取地址*
* git push origin master *上传*

## 多人协作解决冲突
* git fetch
  - git diff master origin/master 
  - git merge origin/master *手动解决冲突 选择保留哪个*
* git pull *将远端同步到本地*

## 查看分支
* git branch 查看分支 <分支名>创建分支
  - -d 删除分支
  - --merged 查看已合并分支
  - --no-merged 查看未合并分支
* git checkout 切换分支
  - -b 简写
* git merge 合并分支

## 绑定到HBuilderX的使用方法
* 安装git
	- 从网站上下载（或者360、qq安全管家等安装）
* 安装TortoiseGit工具 
	- 并安装中文包 [下载地址](https://tortoisegit.org/download/)
	- 以上两个 安装一路next即可
	- TortoiseGit工具需要输入上传者的姓名邮箱
	- 那个不是git的登陆密码，是上传者的编号和标记
* 克隆
	- 安装完后，把代码拉到本地 从github获取地址 克隆到本地 然后上传代码
* 上传
	- 到这一步基本上就没有特别的可以说了，鼠标点点就好了

## 关于git的修改重命名以及预览方法
	* 常年不用老是忘 记录一下happy happy

## 重命名 进入仓库 找到setting 点击进入
	* repository name那里输入 然后点击Rename即可
	* 妈个鸡，我记得以前可以改中文名字，现在居然不行了，日你大头！
## 预览 还是setting  找到GitHub Pages 
	* 点击Source下面的筛选 选择master branch 
	* 出现的新地址，就是可以预览的地址了，niubility！
## 我想这次我要是再忘记了就直接gg！
	* 再改下排版
	* 再再改一下