import {AkairoClient, CommandHandler, ListenerHandler} from "discord-akairo";
import {join} from 'path'
import {Prefix} from "../Config";

export default class BotClient extends AkairoClient {
    /**
     * aliasReplacement?: RegExp;
     * allowMention?: boolean | MentionPrefixPredicate;
     * argumentDefaults?: DefaultArgumentOptions;
     * blockBots?: boolean;
     * blockClient?: boolean;
     * commandUtil?: boolean;
     * commandUtilLifetime?: number;
     * commandUtilSweepInterval?: number;
     * defaultCooldown?: number;
     * fetchMembers?: boolean;
     * handleEdits?: boolean;
     * ignoreCooldown?: Snowflake | Snowflake[] | IgnoreCheckPredicate;
     * ignorePermissions?: Snowflake | Snowflake[] | IgnoreCheckPredicate;
     * prefix?: string | string[] | PrefixSupplier;
     * storeMessages?: boolean;
     */
    commandHandler: CommandHandler = new CommandHandler(this, {
        prefix: Prefix,
        directory: join(__dirname, '..', 'commands'),
        blockClient: true,
        blockBots: true,
        storeMessages: true,
        handleEdits: true,
        commandUtil: true,
        commandUtilLifetime: 3e5,
        allowMention: true,
        fetchMembers: false,
        automateCategories: true
    });

    listenerHandler: ListenerHandler = new ListenerHandler(this, {
        directory: join(__dirname, '..', 'listeners'),
        automateCategories: true
    })
}