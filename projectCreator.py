import os

def getProjectNumber():
    listOfFilesInFolder = os.listdir(".")
    listOfProjects = []
    for i in listOfFilesInFolder:
        if i[:7] == 'Project':
            listOfProjects.append(i)
    for i in listOfProjects:
        i.split('_')



def createProjectStrurcture():
    projectName = input("Enter the project Name : ")
    os.mkdir(os.path.join(".",projectName))
    os.mkdir(os.path.join("./"+projectName,'css'))
    os.mkdir(os.path.join("./"+projectName,'js'))
    os.mkdir(os.path.join("./"+projectName,'img'))


createProjectStrurcture()