---
title: Not Preparing for Future Installations
---

The project may be joined by new developers who should be able to install it easily. Or, maybe you will buy a new computer and need to reinstall the project from GitHub?

Also, the project will probably be installed on multiple servers and environments: <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">local, staging, and production</span>. That should also be smooth.

So, what project creators often forget is to "prepare the ground" for future installations, making it work only locally for themselves

That include three things:
- Proper installation instructions that would actually work
- env.example file that would include all the keys that should be needed for installation (without values, the values may be different for each server)
- Database seeders for the initial data needed to start using the application in testing/real mode

