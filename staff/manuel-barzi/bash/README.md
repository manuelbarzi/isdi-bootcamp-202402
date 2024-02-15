# BASH

Command-line interface commands typical in BASH.

## pwd (path to working directory)

```sh
$ pwd

/Users/pepito
```

## ls (list files / folders)

```sh
$ ls

Documents
Downloads
workspace
```

### ls -l (list file with details)

```sh
$ ls -l

drwx------@  3 manuelbarzi  staff    96 Jul 12  2023 Applications
drwx------@  4 manuelbarzi  staff   128 Feb  5 15:39 Desktop
drwx------@  5 manuelbarzi  staff   160 Jan  2 19:16 Documents
drwx------+ 19 manuelbarzi  staff   608 Feb  5 23:23 Downloads
```

### ls -a (list hidden files / folders)

```sh
$ ls -a

.bash_history			Applications
.config					Desktop
.deno					Documents
.expo
```

## mkdir (make directory)

```sh
$ mkdir workspace
```

## cd (change directory)

```sh
$ cd workspace
```

## touch (creates an empty file)

```sh
$ touch hello.world
```

## mv (move / rename file or folder)

```sh
$ mv hello.world folder-a/folder-b/folder-c
```

```sh
$ mv hello.world hola.mundo
```

## clear (clears the terminal)

```sh
$ clear
```

## top (shows active process in system)

```sh
PID    COMMAND      %CPU TIME  ...
49660  zoom.us      35.4 04:42:12 ...
157    WindowServer 15.8 14:40:12 ...
...
```

## kill -9 <pid> (kills a process by id)

```sh
$ kill -9 50628
```

## tree <path> (shows files/folders structure in tree mode)

```sh
$ tree workspace/isdi-bootcamp-202402

workspace/isdi-bootcamp-202402
└── staff
    └── manuel-barzi
        └── bash
            └── README.md

4 directories, 1 file
```

## rm -rf (removes folder and all its content)

```sh
$ rm -rf workspace/helloworld
```

## rsync -va --del <from> <to> (synchronizes all files and folders from-to)

```sh
$ rsync va --del ./pepito /Users/my-user/pepito
```

## grep -r . -e <expression>

```sh
$ grep -r . -e pepito

./staff/manuel-barzi/bash/README.md:/Users/pepito
./staff/manuel-barzi/bash/README.md:$ rsync va --del ./pepito /Users/my-user/pepito
```