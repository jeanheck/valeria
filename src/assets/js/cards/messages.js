export const messages = {
    CHOOSE_GOLD_OR_MAGIC: (quantity) => {
        return `Type GOLD if you want +${quantity} Gold. Type MAGIC if you want +${quantity} Magic. Other values will consider you choosed the gold option`;
    },
    IMMEDIATELY_GAIN_ONE_CITIZEN: (type) => {
        return `Imediatamente ganhe um cidadão do tipo ${type} da pilha central`;
    }
}