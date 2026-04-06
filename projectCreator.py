import os
import json
from operator import itemgetter

def createJsonFile(a):
    newDict = {}
    for i in a:
        newDict[i[1]] = i[2]
    tempVar1 = os.path.dirname(os.path.abspath(__file__))
    print(newDict)
    with open(tempVar1+"/js/projectList.json", "w") as fp:
        json.dump(newDict, fp, indent=4)


def createProjectStrurcture(projectName):
    tempVar1 = os.path.dirname(os.path.abspath(__file__))
    # print("hello")
    # print(tempVar1)
    os.mkdir(os.path.join(str(tempVar1+"/"),projectName))
    os.mkdir(os.path.join(tempVar1+"/"+projectName,'css'))
    os.mkdir(os.path.join(tempVar1+"/"+projectName,'js'))
    os.mkdir(os.path.join(tempVar1+"/"+projectName,'img'))
    cssFile = tempVar1+"/"+projectName+'/css/style.scss'
    jssFile = tempVar1+"/"+projectName+'/js/main.js'
    htmlFile = tempVar1+"/"+projectName+'/index.html'
    fileList = [cssFile, jssFile, htmlFile]

    for i in fileList:
        with open(i, 'w') as fp:
            pass
        fp.close()


def getProjectNumber():

    listOfFilesInFolder = os.listdir(os.path.dirname(os.path.abspath(__file__)))
    # print(listOfFilesInFolder)
    listOfProjects = []
    listOfProjectsNumber = []
    for i in listOfFilesInFolder:
        if i[:7] == 'Project':
            listOfProjects.append(i)
    for i in listOfProjects:
        listOfProjectsNumber.append(i.split('_'))
    
    listOfProjectsNumber = sorted(listOfProjectsNumber,key = itemgetter(0))
    # print(listOfProjectsNumber)
    return listOfProjectsNumber


def main():
    projectName = input("Enter the project Name : ")
    a = getProjectNumber()
    # print(a)
    projectName ='Project_'+str(int(a[-1][1])+1)+'_'+projectName
    # print(projectName)
    a.append(projectName.split('_'))
    createProjectStrurcture(projectName)
    # print(a)
    createJsonFile(a)
    print('Project Created and Added To Json List')

main()