package com.caplin.cutlass.command.analyse;

import java.io.File;

import org.bladerunnerjs.core.console.ConsoleWriter;
import org.bladerunnerjs.core.plugin.Plugin;

import com.caplin.cutlass.BRJSAccessor;

import org.bladerunnerjs.model.BRJS;
import org.bladerunnerjs.model.InstanceOfShouldntBeInvokedException;
import org.bladerunnerjs.model.exception.command.CommandOperationException;
import org.bladerunnerjs.model.exception.command.CommandArgumentsException;
import org.bladerunnerjs.model.exception.request.BundlerProcessingException;

import com.caplin.cutlass.bundler.js.analyser.CodeAnalyser;
import com.caplin.cutlass.bundler.js.analyser.CodeAnalyserFactory;
import com.caplin.cutlass.bundler.js.analyser.PackageDepsCodeUnitVisitor;
import com.caplin.cutlass.command.LegacyCommandPlugin;

public class PackageDepsCommand implements LegacyCommandPlugin
{
	private ConsoleWriter out;
	
	public PackageDepsCommand() 
	{
		out = BRJSAccessor.root.getConsoleWriter();
	}
	
	@Override
	public void setBRJS(BRJS brjs)
	{	
	}
	
	@Override
	public String getCommandName()
	{
		return "caplin-package-deps";
	}
	
	@Override
	public String getCommandDescription() {
		return "Lists all external dependencies of a package within a given application.";
	}

	@Override
	public String getCommandUsage() {
		return "<appname> <packagename> [summary]";
	}

	@Override
	public String getCommandHelp() {
		return getCommandUsage();
	}
	
	@Override
	public void doCommand(String[] args) throws CommandArgumentsException, CommandOperationException {
		
		PackageDepsConfig config = new PackageDepsConfig(args, this);
		File packageDirectory = config.getPackageDirectory();
		CodeAnalyser codeAnalyser = null;
		
		try 
		{
			codeAnalyser = CodeAnalyserFactory.getLibraryCodeAnalyser(config.getApp(), packageDirectory);
		} 
		catch (BundlerProcessingException e) 
		{
			throw new CommandOperationException(e);
		}
		
		PackageDepsCodeUnitVisitor visitor = new PackageDepsCodeUnitVisitor(config.getPackageName(), config.isSummary());
		
		codeAnalyser.emit(visitor);
		
		String result = visitor.getResult();
		out.println(result);
	}
	
	@Override
	public boolean instanceOf(Class<? extends Plugin> otherPluginCLass)
	{
		throw new InstanceOfShouldntBeInvokedException();
	}
	
	@Override
	public Class<?> getPluginClass() {
		return this.getClass();
	}
}
