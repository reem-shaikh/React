#### Pushing code onto Git for the first time (a normal app)
```bash 
git init 
git status 
git add . or git add --a 
git status 
git commit -m ""
git remote add origin httpadress
git push -u origin master 
```
> Note these commands are used to push a normal app (not a react app)
```bash 
git add . 
git commit -m "added"
git pull
git push -u origin master 
```
and if you face this error 
```bash 
To https://github.com/reem-shaikh/React.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/reem-shaikh/React.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
> Resolve it by typing this command 
```bash 
$ git push -f origin master
```
You can use this command to force changes to the server with the local repository (). remote repo code will be replaced with your local repo code.
> With the -f tag you will override the remote branch code with your local repo code.