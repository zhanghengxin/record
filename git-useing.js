// 变量使用 <> 标记，当 [] 中带有变量，使用 newWord 代替
// 参数通过 [] 标记


推送数据到远程仓库
git push [remote-name] [branch-name]
eg.
	$ git push origin master
1.使用强制push的方法：
$ git push -u origin master -f 
这样会使远程修改丢失，一般是不可取的，尤其是多人协作开发的时候。
2.push前先将远程repository修改pull下来
$ git pull origin master
$ git push -u origin master
3.若不想merge远程和本地修改，可以先创建新的分支：
$ git branch [name]
然后push
$ git push -u origin [name]


更新本地
git stash //保存本地更改
git pull
git stash pop //取回来
从远程抓取数据（需要手动更新）
$ git fetch [remote-name]
$ git fetch master:temp //从远程获取最新到temp
$ git merge temp //合并分支
$ git branch -d temp //删除temp分支


创建分支
$ git branch newBranch
查看分支
$ git branch
选择分支
$ git checkout newBranch
合并分支到主分支
$ git merge newBranch
查看分支冲突
$ git diff [\/barnch]
删除分支
$ git branch -D <newBranch>
	     
打标签
$ git tag <newName>
查看标签
$ git tag 
查看标签详情
$ git show <version>
对标签进行描述
$ git tag [-a] <version> <description> [commitId]
// git tag -a v1.2 -m "最新代码" 2bf9f5b 



