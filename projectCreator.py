import os
import json
from operator import itemgetter

def createJsonFile(a):
    newDict = {}
    for i in a:
        newDict[i[1]] = i[2]
    print(newDict)
    with open("./js/projectList.json", "w") as fp:
        json.dump(newDict, fp, indent=4)


def createProjectStrurcture(projectName):
    os.mkdir(os.path.join(".",projectName))
    os.mkdir(os.path.join("./"+projectName,'css'))
    os.mkdir(os.path.join("./"+projectName,'js'))
    os.mkdir(os.path.join("./"+projectName,'img'))
    cssFile = "./"+projectName+'/css/style.scss'
    jssFile = "./"+projectName+'/js/main.js'
    htmlFile = "./"+projectName+'/index.html'
    fileList = [cssFile, jssFile, htmlFile]

    for i in fileList:
        with open(i, 'w') as fp:
            pass
        fp.close()


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
    return listOfProjectsNumber


def main():
    projectName = input("Enter the project Name : ")
    a = getProjectNumber()
    projectName ='Project_'+str(int(a[-1][1])+1)+'_'+projectName
    # print(projectName)
    a.append(projectName.split('_'))
    createProjectStrurcture(projectName)
    # print(a)
    createJsonFile(a)
    print('Project Created and Added To Json List')

main()