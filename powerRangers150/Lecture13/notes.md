# Scope
There are 4 types of scope:-

1. Global
2. Script
3. Functional
4. Block

Case 1: Is your variable inside {}
```pseudocode
If `NO`:
    If `Made using VAR`:
        Then it's Global Scope
    If `Made using let/const`:
        Then it's Script Scope
If `YES`:
    `Is {} because of Function or NOT`:
        If `NO`:
            If `Made Using VAR`:
                Global Scope
            If `Made using Let/Const`:
                Block Scope
        If `YES`:
            If `Made Using VAR`:
                Functional Scope
            If `Made using Let/Const`:
                Block Scope
```
Lexical Scope: Is your local memory + parents lexical scope.
Basically Memory + parent memory, child can access parents memory.

If reference is not found in local it searches for parents if not there then go to ancestors.

#### Hoisting | Declaration and Redeclaration
