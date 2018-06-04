# text

研究下这个怎么玩，写个拖拽好了~~~

##设置

* git config --global user.name *设置用户名 "summernian"*
* git config --global user.email *设置邮箱 "315652758@qq.com"*
* git config --list *查看配置*


##git的三个区

* 工作区
* 暂存区
  - 作为过渡层
  - 避免误操作
  - 保护工作区和版本区
  - 分支处理
* 版本区（库）

##git命令

* git status
* git add *<file文件名>*
* git commit *提交*
* git log *查看提交历史*

##对比
* git diff *工作区和暂存区的对比*
* git diff --cached *暂存区和版本库之间的对比(--staged)*
* git diff master *工作区和版本库之间的对比*

##撤销
* git reset HEAD <file文件名> *从暂存区撤销到工作区*
* git checkout -- <file文件名> *从工作区撤销数据操作*
* git commit --amend *撤销上次操作重新提交*

##删除
* git rm <file文件名> *删除暂存区的文件*
* git rm -f <file文件名> *工作区、暂存区都删掉*
* git rm --cached <file文件名> *暂存区删除,工作区保留*

##恢复
* git checkout commit_id <file文件名> *恢复单个文件*
* git reset --hard commit_id *恢复版本*
  - HEAD^ *回到上个版本*
  - HEAD~number *回到上几个版本*
* git reflog *查看操作行为*

##同步到远程仓库
* git remote
  - -v
  - origin *获取地址*
* git push origin master *上传*

##多人协作解决冲突
* git fetch
  - git diff master origin/master 
  - git merge origin/master *手动解决冲突 选择保留哪个*
* git pull *将远端同步到本地*

##查看分支
* git branch 查看分支 <分支名>创建分支
  - -d 删除分支
  - --merged 查看已合并分支
  - --no-merged 查看未合并分支
* git checkout 切换分支
  - -b 简写
* git merge 合并分支