<h1 align="center">Git is free and open source software for distributed version control</h1>

Git is a Open Control version control system that is used for tracking changes to files and coordinating work on those files among multiple people. It is designed for distributed collaboration, allowing multiple people to work on the same files simultaneously and track the changes made by each person.

GitHub is a web-based platform that hosts Git repositories. It provides version control for software development, as well as a platform for developers to share and collaborate on software projects. GitHub allows users to create and manage Git repositories, track changes to code, and collaborate with other users on projects. It also includes features such as bug tracking, project management tools, and the ability to review and discuss code changes.

To use Git and GitHub, you will need to install Git on your computer and create a GitHub account. Once you have Git installed and your account set up, you can create a new Git repository on your computer and then push it to GitHub, where it can be shared with other users. You can also clone an existing repository from GitHub to your local machine, make changes to the code, and then push your changes back to GitHub to be incorporated into the project.

## Online Resources

- [git/github Tutorial](https://www.youtube.com/watch?v=apGV9Kg7ics)
- [learngitbranching.js.org](https://learngitbranching.js.org/)
- [gitexplorer.com](https://gitexplorer.com/)

## Local Resources

- This `--help` command will help you to get information about any git command you want to use.

   ```bash
   git push --help
   ```

## GIT :

- Control System: This basically means that Git is a content tracker. So Git can be used to store content — it is mostly used to store code due to the other features it provides.

- Version Control System: The code which is stored in Git keeps changing as more code is added. Also, many developers can add code in parallel. So Version Control System helps in handling this by maintaining a history of what changes have happened. Also, Git provides features like branches and merges, which I will be covering later.

- Distributed Version Control System: Git has a remote repository which is stored in a server and a local repository which is stored in the computer of each developer. This means that the code is not just stored in a central server, but the full copy of the code is present in all the developers’ computers. Git is a Distributed Version Control System since the code is present in every developer’s computer. I will explain the concept of remote and local repositories later in this article.

## Why a Version Control System like Git is needed?

Real life projects generally have multiple developers working in parallel. So a version control system like Git is needed to ensure there are no code conflicts between the developers.

Additionally, the requirements in such projects change often. So a version control system allows developers to revert and go back to an older version of the code.

Finally, sometimes several projects which are being run in parallel involve the same codebase. In such a case, the concept of branching in Git is very important.

