package org.bladerunnerjs.specutil;

import static org.junit.Assert.fail;

import org.bladerunnerjs.model.Aspect;
import org.bladerunnerjs.specutil.engine.CommanderChainer;
import org.bladerunnerjs.specutil.engine.NodeCommander;
import org.bladerunnerjs.specutil.engine.SpecTest;


public class AspectCommander extends NodeCommander<Aspect> {
	private final Aspect aspect;
	public AspectCommander(SpecTest modelTest, Aspect aspect)
	{
		super(modelTest, aspect);
		this.aspect = aspect;
	}
	
	public CommanderChainer getBundledFiles() {
		fail("the model doesn't yet support bundling!");
		
		return commanderChainer;
	}

	public BundleInfoCommander getBundleInfo() throws Exception {
		
		return new BundleInfoCommander((aspect.getBundleSet()));
	}
	
	public void pageLoadedInDev(StringBuffer page, String locale) {
		// TODO Auto-generated method stub
	}
	
	public void pageLoadedInProd(StringBuffer page, String locale) {
		// TODO Auto-generated method stub
	}
}
