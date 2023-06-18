// 面试题

declare namespace IProblem {

    // 面试题 列表 item
    interface item {
        id: number,
        title: string,
        tags: Array<string | number>,
        answer: string[]
    }

    // 面试题 分类
    interface sort {
        [key: string | number]: number[]
    }

    // 面试题 标签 base item
    interface baseTagItem {
        id: number,
        name: string,
        key: string,
    }

    // 面试题 标签 item
    interface tagItem extends baseTagItem {
        icon: string,
        children?: baseTagItem[]
    }

    // 标签菜单
    interface tagMenu {
        [key: string]: string | number
    }


    interface homeMenuItemSub {
        name: string;
        total: number;
        icon: string;
        id: number | string;
    }

    // 首页菜单item
    interface homeMenuItem {
        title: string;
        sub: homeMenuItemSub[];
    }






    // ********************* 笔试题
    interface answerListItem {
        id: number
        title: string
        code: string
        option: string[]
        answer: number
        explain: string[]
    }

    // 笔试题列表
    type answerList = answerListItem[]







    // ************* 请求
    type GET_PROBLEM_DATA = API.RESUL<{
        answerList: answerListItem[],
        problem: item[],
        problemSort: sort,
        problemTag: tagItem[],
        problemTagMenu: tagMenu,
        homeMenu: homeMenuItem[],
    }>
}