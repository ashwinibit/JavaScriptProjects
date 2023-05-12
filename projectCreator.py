import os
from operator import itemgetter

def getProjectNumber():
    listOfFilesInFolder = os.listdir(".")
    listOfProjects = []
    listOfProjectsNumber = []
    for i in listOfFilesInFolder:
        if i[:7] == 'Project':
            listOfProjects.append(i)
    for i in listOfProjects:
        listOfProjectsNumber.append(i.split('_'))
    
    listOfProjectsNumber = sorted(listOfProjectsNumber,key = itemgetter(1))
    return listOfProjectsNumber[-1]



def createProjectStrurcture():
    projectName = input("Enter the project Name : ")
    a = getProjectNumber()
    projectName = projectName
    # os.mkdir(os.path.join(".",projectName))
    # os.mkdir(os.path.join("./"+projectName,'css'))
    # os.mkdir(os.path.join("./"+projectName,'js'))
    # os.mkdir(os.path.join("./"+projectName,'img'))


createProjectStrurcture()