import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    APIEmbedField,
    ColorResolvable,
    MessageCreateOptions
} from 'discord.js';

const EMBED_COLOR: ColorResolvable = '#2F3136';
const BUTTON_COLOR: ButtonStyle = ButtonStyle.Primary;

function criarEmbedFiel(tituloCampo: string): EmbedBuilder {
    const campoInstrucoes: APIEmbedField = {
        name: `**${tituloCampo}**`,
        value: 
            '```\n' +
            '📜 | **Registre a sua empresa.**\n' +
            '⏰ | **Preencha com atenção todos os dados solicitados.**\n' +
            '✅ | **Aguarde aprovação da equipe responsável.**\n' +
            '```',
        inline: false
    };

    const embed = new EmbedBuilder()
        .setColor(EMBED_COLOR)
        .setAuthor({
             name: 'REGISTRO - SILENCE EMPRESAS', 
             iconURL: 'URL_DO_ICONE_DA_EMPRESA'
        })
        .addFields(campoInstrucoes)
        .setFooter({ 
            text: `Desenvolvido com ❤️ pela SysteMartins.com.br`
        });

    return embed;
}

function criarActionRowBotao(): ActionRowBuilder<ButtonBuilder> {
    const botaoRegistrar = new ButtonBuilder()
        .setCustomId('registrar_empresa_silence')
        .setLabel('REGISTRAR')
        .setStyle(BUTTON_COLOR) 
        .setEmoji('🗳️');

    const actionRow = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(botaoRegistrar);

    return actionRow;
}

function getMensagemRegistro(): MessageCreateOptions {
    const embed = criarEmbedFiel('REGISTRO - SILENCE EMPRESAS');
    const actionRow = criarActionRowBotao();

    return {
        embeds: [embed], 
        components: [actionRow] as any
    };
}

export { getMensagemRegistro };