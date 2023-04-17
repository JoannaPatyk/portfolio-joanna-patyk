import React from 'react';
import { TfiStatsUp } from 'react-icons/tfi';
import { CiCalculator2, CiZoomIn } from 'react-icons/ci';
import { GiTakeMyMoney, GiPayMoney } from 'react-icons/gi';
import { GiFamilyTree } from 'react-icons/gi';

const functionality = [
    {
        id: 1,
        text: 'The dashboard presents information for the current month. Users can navigate between different months. The dashboard includes a chart that displays incurred expenses in two formats: pie chart and bar chart. Furthermore, the dashboard provides information on the total planned expenses, incurred expenses, and the balance.',
        icon: <TfiStatsUp />
    },

    {
        id: 2,
        text: 'The next tab allows the user to add their own categories according to which they later save their expenses. Added categories can be edited and deleted.',
        icon: <CiCalculator2 />
    },

    {
        id: 3,
        text: 'After establishing the list of categories, you can proceed to adding expenses. Simply select one of the available categories, enter the amount, optionally add a comment to the expense being entered.',
        icon: <CiZoomIn />
    },

    {
        id: 4,
        text: "The list of current expenses is displayed in the 'expenses list'. You can find information there about who added a particular expense, when, which category the expense relates to, the amount of the expense, and optionally a comment if added by the user.",
        icon: <GiPayMoney />
    },

    {
        id: 5,
        text: "The list of current expenses is displayed in the 'expenses list'. You can find information there about who added a particular expense, when, which category the expense relates to, the amount of the expense, and optionally a comment if added by the user.",
        icon: <GiTakeMyMoney />
    },

    {
        id: 6,
        text: 'The last tab concerns groups. The user can create their own group, give it any name, invite or remove other application users from their group. They can also join another group if they receive an invitation from another user. In this way, the budget can be shared with other people, for example, with family members.',
        icon: <GiFamilyTree />
    }
];

export default functionality;
