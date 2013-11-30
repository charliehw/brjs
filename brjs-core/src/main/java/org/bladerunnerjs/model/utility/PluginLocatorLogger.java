package org.bladerunnerjs.model.utility;

import java.util.List;

import org.bladerunnerjs.core.plugin.Plugin;
import org.bladerunnerjs.core.plugin.PluginLocator;
import org.bladerunnerjs.model.BRJS.Messages;

public class PluginLocatorLogger {
	public static void logPlugins(org.bladerunnerjs.core.log.Logger logger, PluginLocator pluginLocator) {
		listFoundPlugins(logger, pluginLocator.getModelObserverPlugins());
		listFoundPlugins(logger, pluginLocator.getCommandPlugins());
		listFoundPlugins(logger, pluginLocator.getTagHandlerPlugins()); // TODO: add to spec tests
		listFoundPlugins(logger, pluginLocator.getContentPlugins()); // TODO: add to spec tests
		listFoundPlugins(logger, pluginLocator.getBundlerPlugins());
		listFoundPlugins(logger, pluginLocator.getMinifierPlugins()); // TODO: add to spec tests
	}
	
	private static void listFoundPlugins(org.bladerunnerjs.core.log.Logger logger, List<? extends Plugin> plugins) {
		for (Plugin plugin : plugins) {
			logger.debug(Messages.PLUGIN_FOUND_MSG, plugin.getPluginClass().getCanonicalName());
		}
	}
}
