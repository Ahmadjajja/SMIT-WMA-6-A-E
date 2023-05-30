# Welcome-to-open-source Contributors Guide

## Steps to add yourself to the contributers list.

1. You will first need git which you can download from [here](https://git-scm.com/downloads).

2. Now head [here](https://github.com/Ahmadjajja/SMIT-WMA-6-A-E) and click on the `fork` button.

3. On the next page you will see a `create fork` button, press it.

4. You will land on your forked repo page, here you will see a `<> Code` button marked in green, click on it and copy the url.

5. Open your terminal and type `git clone URL(That you copied)` and press enter.

6. Change to the repository directory on your computer (if you are not already there):
    <pre style="white-space: pre;">
    
        cd SMIT-WMA-6-A-E

   </pre>

7. Now create a branch using the `git switch` command:
    <pre style="white-space: pre;">
   
       git switch -c your-new-branch-name
   
       For example:
   
       git switch -c add-alonzo-church
   </pre>

8. Now you are in `current repo's new created branch` and edit the `README.md` file using any text editor, VScode for example.

9. Below is a code snippet for reference as to what has to ADDED in the file. Inside the `<b> </b>` tag you have to put your name, in the `<href >` tag, you have to place your github profile URL. And lastly you have to place your github profile photo url inside the `src` tag.

   ```
   <td align="center">
       <a href="https://github.com/Ahmadjajja">
           <img src="https://avatars.githubusercontent.com/u/86593662?v=4" width="100px;" alt="Ahmad Jajja"/>
           <br />
           <sub><b>Ahmad Jajja</b></sub>
       </a>
   </td>
   <td align="center">
       <a href="https://github.com/Ahmadjajja">
           <img src="https://avatars.githubusercontent.com/u/86593662?v=4" width="100px;" alt="Ahmad Jajja"/>
           <br />
           <sub><b>Ahmad Jajja</b></sub>
       </a>
   </td>
   ```

10. Now commit those changes using the `git commit` command:

```
git commit -m "Add your-name to Contributors list"
```

replacing `your-name` with your name.

11. Push your changes using the command `git push`:

```
git push -u origin your-branch-name
```

replacing `your-branch-name` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Soon I'll be merging all your changes into the main branch of this project. You will get a notification email once the changes have been merged.

## Where to go from here?

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll often encounter as a contributor!

Celebrate your contribution and share it with your friends and followers by going to [web app](https://firstcontributions.github.io/#social-share).

Now let's get you started with contributing to other projects. We've compiled a list of projects with easy issues you can get started on. Check out [the list of projects in the web app](https://firstcontributions.github.io/#project-list).

Lastly, GitHub/Git are vital in open-source contributions, to learn more about them check this blog [here](https://dragon2002.hashnode.dev/git-and-github-must-know-guide#heading-setting-up-github).
