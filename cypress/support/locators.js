const locators ={
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        XP_BTN_LOGIN: "//button[@type='submit']"
    },

    MESSAGE: {
        MSG_TOAST: '.toast-message',
        BTN_CLOSE_TOAST: '.toast-close-button'
    },

    MENU: {
        BTN_MENU: '[data-test="menu-settings"]',
        BTN_MENU_RESET: '[href="/reset"]',
        BTN_MENU_INVOICE: '[href="/contas"]',
        BTN_SHIFT: '[data-test="menu-movimentacao"]',
        BTN_HOME: '[data-test="menu-home"]',
        BTN_STATEMENT: '[data-test="menu-extrato"]'
    },

    HOME_SCREEN: {
        FN_XP_HOME_DSC_INVC: (nome, value) => `//td[contains(., '${nome}')]/../td[contains(., '${value}')]`    
    },

    SHIFT_SCREEN: {
        DESC: '[data-test=descricao]',
        VALUE: '[data-test=valor]',
        INTERESS: '[data-test=envolvido]',
        CONTA: '[data-test=conta]',
        BTN_STATUS: '[data-test="status"]',
    },

    SUMMARY: {
        XP_INVC_DSC_VALUE: "//span[contains(., 'Desc')]/following-sibling::small[contains(., '123')]",
        LIST_NMBR: '.list-group > li',
        FN_XP_LINHA: desc => `//span[contains(., '${desc}')]/../../../..`,
        FN_XP_ALTERAR_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class='fas fa-edit']`,
        FN_XP_SUMMARY_DSC_INVC: (nome, value) => `//span[contains(., '${nome}')]/../small[contains(., '${value}')]`,
        FN_XP_BTN_DELETE: account => `//span[contains(., '${account}')]/../../..//i[@class='far fa-trash-alt']`,
    },

    INVOICE: {
        INVC_NAME: '[data-test="nome"]',
        XP_INVC_BTN_SAVE: "//button[@alt='Salvar']",
        FN_XP_BTN_ALTERAR: nome => `//table//td[contains(., '${nome}')]/..//i[@class='far fa-edit']`,
        XP_INVC_UPDATE_BTN: "//tbody//td[contains(., 'Fatura teste')]/..//i[@class='far fa-edit']",
        INVC_TEXT_NAME: '[data-test=nome]'
    },

    SALDO: {
        FN_XP_SALDO_CONTA: nome => `//td[contains(., '${nome}')]/../td[2]`
    },

}

export default locators;