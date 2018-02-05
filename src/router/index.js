import Vue from 'vue'
import Router from 'vue-router'
import Connexion from '@/components/Connexion'
import MembreCreation from '@/components/MembreCreation'
import Conversations from '@/components/Conversations'
import ConversationCreation from '@/components/ConversationCreation'
import ConversationModifier from '@/components/ConversationModifier'
import Messages from '@/components/Messages'
import Membres from '@/components/Membres'
import test from '@/components/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '*',
      redirect : '/conversations',
    },
    {
      path: '/connexion',
      component: Connexion
    },
    {
      path: '/membre-creation',
      component: MembreCreation
    },
    {
      name:'conv',
      path: '/conversations',
      component: Conversations
    },
    {
      name:'messages',
      path: '/messages/:id',
      component: Messages
    },
    {
      name:'membres',
      path: '/liste-membres',
      component: Membres
    },
    {
      path: '/modifier-conversation',
      component: ConversationModifier
    },
    {
      path: '/creer-conversation',
      component: ConversationCreation
    },
    {
      path: '/test',
      component: test
    }

  ]
})
